import classNames from "classnames";
import React, {Component} from "react"
import IntersectionVisible from "react-intersection-visible"
import { connect } from "react-redux";
import { setCursorHover, setCursorUnhover } from "../actions/cursor";
import parseLinks from "../services/parseLinks"
import Icon from "./Icon";

class Video extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isPlaying: false,
			isEnded: false,
			isHovering: false,
			duration: null,
			currentTime: '0:00',
		}

		this.ref = React.createRef();
	}

	formatTime = (time) => {
		const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - (minutes * 60));
		return `${minutes}:${seconds >= 10 ? seconds : "0" + seconds}`
	}

	componentDidMount() {
		this.ref.current.onloadedmetadata = () => {
			this.setState({
				duration: this.formatTime(this.ref.current.duration)
			})
		}
	}

	playVideo = () => {
		this.ref.current.play();
		this.setState({ isPlaying: true });
	}
	
	pauseVideo = () => {
		this.ref.current.pause();
		this.setState({ isPlaying: false });
	}

	onTimeUpdate = () => {
		this.setState({
			currentTime: this.formatTime(this.ref.current.currentTime),
			isEnded: this.ref.current.currentTime == this.state.duration
		})
	}

	onEnded = () => {
		this.setState({
			isPlaying: false,
			isHovering: true,
			isEnded: true
		})
	}

	handleButtonMouseOver = () => {
		this.props.setCursorHover();
		this.setState({
			isHovering: true
		})
	}

	handleButtonMouseLeave = () => {
		this.props.setCursorUnhover();			
	}

	handleMouseMove = () => {
		this.props.setCursorHover();
		clearTimeout(this.timeout);
		this.setState({
			isHovering: true
		})
		if (!this.state.isEnded) {
			this.timeout = setTimeout(() => this.setState({
				isHovering: false
			}), 4000)
		}
	}

	handleMouseLeave = () => {
		this.setState({
			isHovering: false
		})
		this.props.setCursorUnhover();
	}

	onClick = () => {
		setTimeout(() => {
			this.props.setCursorUnhover();
		}, 300)
		setTimeout(() => {
			this.props.setCursorHover();
		}, 900)
		this.state.isPlaying ? this.pauseVideo() : this.playVideo()
	}

	render() {

		const { src, loop, poster, caption, hideControls, disableAutoplay} = this.props;
		const { isPlaying, isEnded, isHovering, duration, currentTime } = this.state;

		return (
			<IntersectionVisible 
			onShow={disableAutoplay ? null : this.playVideo} 
			onHide={this.pauseVideo}>
				<div className={classNames({ "video-wrapper": true, "video-wrapper--hovering": isHovering })}>
					<video
					onClick={this.onClick}
					onMouseEnter={this.handleMouseMove} 
					onMouseLeave={this.handleMouseLeave}
					onMouseMove={this.handleMouseMove}
					onTimeUpdate={this.onTimeUpdate}
					onEnded={this.onEnded}
					ref={this.ref}
					src={src} 
					playsInline 
					autoPlay={false} 
					preload={"auto"} 
					muted 
					loop={loop ? true : false}
					poster={poster ? poster : null}/>
					{ !hideControls ? <div className="video-wrapper__controls">
						<div className="video-wrapper__controls-item mb0">
							<Icon icon={isEnded ? "refresh" : isPlaying ? "play" : "pause"} size={16}/>
							<p className="mb0">{ isEnded ? "Replay" : (isPlaying ? "Playing" : "Paused") }</p>
						</div>
						<div className="video-wrapper__controls-item mb0">
							<p className="mb0">{ currentTime } / { duration }</p>
						</div>
					</div> : null}
				</div>
				{ caption ? (<figcaption><p className="mb0">{parseLinks(caption)}</p></figcaption>) : null }
			</IntersectionVisible>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)