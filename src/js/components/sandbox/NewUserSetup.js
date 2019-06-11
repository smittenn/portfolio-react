import React, {Component} from "react"

import GenericSandbox from './GenericSandbox'


export default class NewUserSetup extends Component {

	constructor(props) {
		super(props);
	}

				/*
			'https://unpkg.com/react-autosuggest@9.4.3',
			'https://unpkg.com/react-motion@0.5.2',
			'https://unpkg.com/react-skroll@0.7.2	',

			const { Motion, spring, presets } = window['react-motion']
			const { ScrollProvider, Scroller, ScrollLink } = window['react-skroll']
			const Autosuggest = window['react-autosuggest']

			*/



	render() {
		const dependencies = [
			'https://unpkg.com/react@16.6.0/umd/react.development.js',
			'https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js',
			'https://npmcdn.com/classnames@2.2.5',
		]

		const scriptValue = `const classNames = window['classnames']


const homeProfileSetupData = {	
	"skills": [
		{
			"title": "Skills",
			"data": [
				{ "id": "Data Analysis" },
				{ "id": "Copywriting" },
				{ "id": "Foreign Languages" },
				{ "id": "Accounting" },
				{ "id": "Computer Languages" },
				{ "id": "Mathematics" },
				{ "id": "Graphic Design" },
				{ "id": "Planning / Event Planning" },
				{ "id": "Javascript" },
				{ "id": "SEO / SEM Marketing" },
				{ "id": "Bookkeeping" },
				{ "id": "Communication" },
				{ "id": "Ability to Work Under Pressure" },
				{ "id": "Decision Making" },
				{ "id": "Time Management" },
				{ "id": "Self-motivation" },
				{ "id": "Conflict Resolution" },
				{ "id": "Leadership" },
				{ "id": "Adaptability" },
				{ "id": "Teamwork" },
				{ "id": "Creativity" },
				{ "id": "Analytical" },
				{ "id": "Adaptable" },
				{ "id": "Quick Learner" },
				{ "id": "Able to Build Relationships" },
				{ "id": "Loyal and Discreet (maintain confidentiality)" },
				{ "id": "Flexible" },
				{ "id": "Responsible" },
				{ "id": "Able to Operate Under Pressure" },
				{ "id": "Efficient" },
				{ "id": "Typography" },
				{ "id": "Detail-oriented" },
				{ "id": "Computer and Internet Skills" },
				{ "id": "Written and Verbal Communication" },
				{ "id": "Organizational Skills" },
				{ "id": "Multi-tasking" },
				{ "id": "Time Management" },
			]
		}
	],
	franchises: [
		"Consumer",
		"Consumer Medical",
		"Corporate",
		"Medical Devices - All",
		"Medical Devices - Asp",
		"Medical Devices - Acclarent",
		"Medical Devices - BWI",
		"Medical Devices - Cerenovus",
		"Medical Devices - Depuy Synthes",
		"Medical Devices - Ethicon",
		"Medical Devices - Mentor",
		"Pharmaceuticals",
		"Supply Chain",
	],
	functions: [
		"Customer & Logistics Services",
		"Design",
		"Engineering & Property Services",
		"Environment, Health & Safety",
		"Finance",
		"Global External Innovation",
		"Global Services - Finance",
		"Global Services - Human Resources",
		"Global Services - Procurement",
		"Global Services - Service Infrastructure",
		"Global Corporate Affairs",
		"Human Resources",
		"Legal",
		"Marketing",
		"Office of the Chief Medical Officer",
		"Procurement",
		"Professional Education",
		"Quality & Compliance",
		"Regulatory Affairs",
		"Research & Development",
		"Sales",
		"Sales Training",
		"Strategy & Deployment",
		"Technology",
	],
	locations: [
		"Aguadilla, PRI",
		"Albuquerque, NM",
		"Amersfoort, NLD",
		"Añasco, PRI",
		"Asunción, PY",
		"Athens, GA",
		"Athens, GRC",
		"Auckland, NZL",
		"Baddi, IND",
		"Bangkok, THA",
		"Barcarena, PRT",
		"Beerse, BEL",
		"Beijing, CHN",
		"Berlin, DEU",
		"Bern, CHE",
		"Birkerød, DNK",
		"Bogota / LATAM Region",
		"Bogotá, COL",
		"Brazil Comercial",
		"Brazil Industrial",
		"Breda, NLD",
		"Brussels, BEL",
		"Bucharest, ROU",
		"Budapest, HUN",
		"Buenos Aires Industrial, ARG",
		"Buenos Aires S&M , ARG",
		"Buenos Aires, ARG",
		"Burnaby, CAN",
		"Cairo, EGY",
		"Cali, COL",
		"CAM",
		"Capital Park, GBR",
		"Chengdu, CHN",
		"Cheong Ju, KOR",
		"Chesterbrook, PA",
		"Cincinnati, OH",
		"Cologno Monzese, IT",
		"Cork (Biologics), IRL",
		"Cork (Chemical API), IRL",
		"Cork, IRL",
		"Cornelia, GA",
		"Dabao, CHN",
		"Diamond Bar, CA",
		"Dominican Republic",
		"Draper, UT",
		"Dubai, UAE",
		"Dublin, IRL",
		"Eight Mile Plains QLD, AUS",
		"Elmira, NY",
		"Espoo, FIN",
		"Ettlingen, DEU",
		"Fort Washington, PA",
		"France (JJSBF)",
		"Fremont, CA",
		"Garðabær, ISL",
		"Geel, BEL",
		"Groningen, NLD",
		"Guangzhou, CHN",
		"Guelph, CAN",
		"Gurabo, PRI",
		"Gurgaon, IND",
		"Haifa (Haifa Technology Center — HTC), ISR",
		"Hangzhou, CHN",
		"Helsingborg, SWE",
		"High Wycombe, GBR",
		"Hindmarsh SA, AUS",
		"Hiroshima, JPN",
		"Hong Kong",
		"Horsham, PA",
		"Incheon, KOR",
		"Inverness, SCT",
		"Irvine, CA",
		"Irving, TX",
		"Irwindale, CA",
		"Issy-les-Moulineaux, FRA",
		"Istanbul, TUR",
		"Italy",
		"Jacksonville, FL",
		"Jakarta, IDN",
		"Japan Campus",
		"Jeddah (KSA)",
		"Johannesburg",
		"Juárez, MEX",
		"Kirkel, DEU",
		"Kulim, MYS",
		"La Jolla, CA",
		"Lancaster, PA",
		"Las Piedras, PRI",
		"Latina, ITA",
		"Le Locle/Neuchatel, CHE",
		"Leeds ONE, GBR",
		"Leiden (Biologics), NLD",
		"Leiden (IDV), NLD",
		"Leiden (JPC), NLD",
		"Leiden, NLD",
		"Lima, PER",
		"Limerick, IRL",
		"Lititz, PA",
		"Livingston, GBR",
		"London (JPC), GBR",
		"Los Angeles, CA",
		"Lysaker, NOR",
		"Madrid Comercial, ESP",
		"Madrid Industrial, ESP",
		"Madrid, ESP",
		"Maidenhead, GBR",
		"Malvern, PA",
		"Manati, PRI",
		"Mandra, GRC",
		"Manila, PH",
		"Markham, CAN",
		"Marousi, GRC",
		"Mexico",
		"Mexico City, MEX",
		"Mexico DF, MEX",
		"Milpitas, CA",
		"Miramar, FL",
		"Montevideo, URY",
		"Monument, CO",
		"Morris Plains, NJ",
		"Morrisville, NC",
		"Moscow, RUS",
		"Mulgrave VIC, AUS",
		"Mulund, IND",
		"Mumbai, IND",
		"Nagoya, JPN",
		"Neuss, DEU",
		"Neuss, GER",
		"New Brunswick / NA Region",
		"New Brunswick, NJ",
		"New York, NY",
		"Norderstedt, DEU",
		"North Ryde NSW, AUS",
		"Oberdorf, Switzerland",
		"Orchard Road, NJ",
		"Osaka, JPN",
		"Osborne Park WA, AUS",
		"Other APAC Location",
		"Other Belgian Campuses",
		"Other CEE Campuses",
		"Other EMEA Location",
		"Other German Campuses",
		"Other Great Britain Campuses",
		"Other Italian Campuses",
		"Other LATAM Location",
		"Other Middle East Campuses",
		"Other NA Location",
		"Other Nordics Campuses",
		"Other Portuguese Campuses",
		"Other Russia &amp; CIS Campuses",
		"Other South African Campuses",
		"Other Spanish Campuses",
		"Other Swiss Campuses",
		"Palm Beach Gardens, FL",
		"Panamá City, PAN",
		"Paoli, PA",
		"Paranaque City, PHL",
		"Pefki, GRC",
		"Petaling Jaya, MYS",
		"Pinewood, GBR",
		"Piscataway, NJ",
		"Plymouth, MN",
		"Portland, OR",
		"Portugal",
		"Prague / EMEA Region",
		"Prague, CZE",
		"Pratica di Mare, ITA",
		"Puebla, MEX",
		"Queluz de Baixo, PRT",
		"Raritan, NJ",
		"Raynham, MA",
		"Riga, LVA",
		"Rungis, FRA",
		"Russia, Ukraine and CIS",
		"Saint-Priest, FRA",
		"San Angelo, TX",
		"San Antonio, TX",
		"San Jose, CA",
		"San Lorenzo, PR",
		"Santa Ana, CA",
		"Santiago, CHL",
		"São José dos Campos, BRA",
		"São Paulo, BRA (Vision Care)",
		"Schaffhausen, CH",
		"Sendai, JPN",
		"Seoul, KOR",
		"Sézanne, FRA",
		"Shanghai (JJC), CHN",
		"Shanghai (SJJP), CHN",
		"Shanghai (Surgical Vision), CHN",
		"Shanghai, (JJDCC) CHN",
		"Shanghai, CHN",
		"Shefayim, ISR",
		"Singapore",
		"Singapore (Diabetes Care)",
		"Singapore (Regional Office)",
		"Singapore (Surgical Vision)",
		"Singapore (Training Center)",
		"Singapore (Vision Care)",
		"Skillman, NJ",
		"Solna, SWE",
		"Solothurn (Zuchwil), CHE",
		"Somerville, NJ",
		"South Africa",
		"Spring House, PA",
		"Sunbury on Thames, GBR",
		"Suzhou / APAC Region",
		"Suzhou, CHN",
		"Switzerland",
		"Sydney (Australia & New Zealand Head Office)",
		"Sydney, AUS",
		"Taiwan",
		"Takamatsu, JPN",
		"Tampa, FL",
		"Titusville, NJ",
		"Tokyo, JPN",
		"Toledo, ESP",
		"Toronto, CAN",
		"UMK Commercial",
		"Uppsala, SWE",
		"Vaanta, FIN",
		"Vacaville, CA",
		"Val-de-Reuil, FRA",
		"Valencia, VEN",
		"Vienna, AUT",
		"Warsaw, IN",
		"Warsaw, POL",
		"Washington, DC",
		"West Chester, PA",
		"Westport, IRL",
		"Wilmington, DE",
		"Wuppertal, DEU",
		"Zug, CHE",
	]
}

class Switch extends React.Component {

  constructor() {
    super();
  }

  selectOption(index) {
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  }

  toggle = () => {
  	if (this.props.onChange) {
      this.props.onChange(!this.props.value);
    }
  }

  render() {
    const { value, label } = this.props;
    
    const classnames = classNames({
    	'switch': true,
    	'switch--on': value === true
    });

    return (
      <div className="switch-wrapper">
        <div className={classnames} onClick={this.toggle}>
          <label>{label}</label>
        	<div className="switch-toggle">
            <span>{(value === true) ? 'On' : 'Off'}</span>
          </div>
        </div>
      </div>
    )
  }
}


class HomeProfileSetup extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			preferences: {
				franchises: [],
				locations: [],
				functions: [],
			},
			accounts: {
				yammer: false,
				outlook: false,
			},
			skills: [],
			completed: {
				"Welcome": true,
				"Preferences": false,
				"Photo": false,
				"Bio": false,
				"Contact": false,
				"Accounts": false,
				"Skills": false,
				"Birthday": false,
			},
		}
	}

	onChangeAccountsYammer = () => {
		this.setState(prevState => ({
			completed: {
				...prevState.completed,
				"Accounts": true,
			},
			accounts: {
				...prevState.accounts,
				yammer: !prevState.accounts.yammer,
			}
		}))
	}

	onChangeAccountsOutlook = () => {
		this.setState(prevState => ({
			completed: {
				...prevState.completed,
				"Accounts": true,
			},
			accounts: {
				...prevState.accounts,
				outlook: !prevState.accounts.outlook,
			}
		}))
	}

	setPreferences = (filterType, value) => {
		this.setState(prevState => ({
			completed: {
				...prevState.completed,
				"Preferences": (prevState.preferences.franchises.length > 0 && prevState.preferences.locations.length > 0 && prevState.preferences.functions.length > 0)
			},
			preferences: { 
				...prevState.preferences, 
				[filterType]: value 
			},
		}))
	}

	addSkill = (skill) => {
		this.setState(prevState => ({
			completed: {
				...prevState.completed,
				"Skills": true,
			},
		  	skills: prevState.skills.concat(skill)
		}))
	}

	removeSkill = (index) => {
		this.setState(prevState => ({
			completed: {
					...prevState.completed,
					"Skills": true,
			},
			skills: prevState.skills.filter((x,i) => i != index )
		}))
	 }

	removePreference = (filterType, index) => {
		this.setState(prevState => ({
			preferences: {
				...prevState.preferences,
				[filterType]: prevState.preferences[filterType].filter((x,i) => i != index ),
			},
		}))
	}

	completeField = (completed) => {
		this.setState(prevState => ({
			completed: {
					...prevState.completed,
					[completed]: true,
			},
		}))
	}
	
	render() {
		const { scroll } = this.props;

		const classnames = classNames({
			"home-profile-setup": true
		});

		let activeChild = scroll.children.filter((child) => child.active);
		(activeChild.length > 0) ? (activeChild = activeChild.pop()) : null;

		// const linePercentage = {
		// 	"Welcome": 0.06,
		// 	"Preferences": .22,
		// 	"Photo": .38,
		// 	"Bio": .50,
		// 	"Contact": .64,
		// 	"Accounts": .78,
		// 	"Birthday": .94,
		// }

		const linePercentage = {
			"Preferences": 0,
			"Photo": .33333333,
			"Accounts": .66666667,
			"Skills": 1,
		}

		const lineAnimation = {
			transform: 'scale3d(' + linePercentage[activeChild.name] + ', 1, 1)',
		}


		return (
			<div className={classnames}>
				<i className="iconcss icon-home-logo"></i>
				<Scroller>

					{/*<section name="Welcome" className={classNames({ 'moving': scroll.moving })}>
						<h1>Welcome to Home, James.</h1>
						<p>Home is where all Johnson & Johnson employees can connect to create a productive, united work environment. We're excited for you to join the community!</p>
						{
							scroll.children.filter((child) => child.name == 'Preferences').map((child, index) =>
								<ScrollLink key={index} to={child.start} key={index}>	
									<button className="mdc-button mdc-button--text-link mdc-button--white">
										<span>Let’s get started</span>
										<i className="iconcss icon-arrow-right"></i>
									</button>
								</ScrollLink>
							)
						}
					</section>*/}

					<section name="Preferences" className={classNames({ 'moving': scroll.moving })}>
							<h1>Welcome to Home, James.</h1>
							<p>Connect with other Johnson & Johnson employees and create a positive and productive work environment. Get started by selecting the topics you want to see within your news and events.</p>
							{/*<h1>Tell us what you’re interested in.</h1>
							<p>Select the companies, functions and locations you want to see within your news and events. Pick as many as you like.</p>*/}
							<div className="contents">
								<MultiSelectBox
								isLarge
								value={this.state.preferences.franchises}
								label="Company/Franchise *"
								onChange={this.setPreferences.bind(this, 'franchises')}
								items={homeProfileSetupData.franchises}
								/>
								<MultiSelectBox
								isLarge
								value={this.state.preferences.functions}
								label="Function *"
								onChange={this.setPreferences.bind(this, 'functions')}
								items={homeProfileSetupData.functions}
								/>
								<MultiSelectBox
								isLarge
								value={this.state.preferences.locations}
								label="Location *"
								onChange={this.setPreferences.bind(this, 'locations')}
								items={homeProfileSetupData.locations}
								/>
							</div>
							<div className="tags-wrapper">
								{	
									this.state.preferences.franchises.map((item, index) =>
										<Tag key={index} label={item} click={() => this.removePreference('franchises', index)}/>
									)
								}
								{	
									this.state.preferences.functions.map((item, index) =>
										<Tag key={index} label={item} click={() => this.removePreference('functions', index)}/>
									)
								}
								{	
									this.state.preferences.locations.map((item, index) =>
										<Tag key={index} label={item} click={() => this.removePreference('locations', index)}/>
									)
								}
							</div>
							{/*<div className="spacer"></div>*/}
								{
									/*<button disabled={(this.state.completed.Preferences) ? false : true} className="mdc-button mdc-button--secondary mdc-button--white">
										<span>Continue to Home</span>
									</button>*/
								}
								{/*<SelectBox
								value={this.state.preferences.franchises}
								label="Company/Franchise *"
								onChange={this.setPreferences.bind(this, 'franchises')}
								items={homeProfileSetupData.franchises}
								/>
								<SelectBox
								value={this.state.preferences.functions}
								label="Function *"
								onChange={this.setPreferences.bind(this, 'functions')}
								items={homeProfileSetupData.functions}
								/>
								<SelectBox
								value={this.state.preferences.locations}
								label="Location *"
								onChange={this.setPreferences.bind(this, 'locations')}
								items={homeProfileSetupData.locations}
								/>*/}
					</section>

					{<section name="Photo" className={classNames({ 'moving': scroll.moving })}>
							<h1>Put a face to your name.</h1>
							<p>We’re connecting you with employees all over the world, adding your photo will put you in a room across the globe!</p>
							<div className="contents">
								<ImageUpload onUpload={() => this.completeField("Photo") }/>
							</div>
					</section>}

					{/*<section name="Bio" className={classNames({ 'moving': scroll.moving })}>
						<h1>About your role.</h1>
						<p>Share a 1-2 line description of what you do here at Johnson & Johnson. </p>
					</section>*/}

					{/*<section name="Contact" className={classNames({ 'moving': scroll.moving })}>
							<h1>What’s the best way to reach you?</h1>
							<p>There are many ways to connect at Johnson & Johnson. Let us know your preference.</p>
					</section>*/}

					{<section name="Accounts" className={classNames({ 'moving': scroll.moving })}>
							<h1>Sync your accounts.</h1>
							<p>See what's happening on Yammer to share articles and events. Connect to your Outlook calendar to get a glimpse of your day.</p>
							<Switch label={"Yammer"} value={this.state.accounts.yammer} onChange={this.onChangeAccountsYammer} />
							<Switch label={"Outlook"} value={this.state.accounts.outlook} onChange={this.onChangeAccountsOutlook} />
					</section>}

					{/*<section name="Birthday" className={classNames({ 'moving': scroll.moving })}>
							<h1>Like cupcakes?</h1>
							<p>Enter your birthday and let us know when to celebrate! </p>
					</section>*/}

					{<section name="Skills" className={classNames({ 'moving': scroll.moving })}>
						<h1>Add your skills.</h1>
						<p>Search below for your personal and professional skills.</p>
						<SearchBar placeholder="Skills (ex. Data Analytics)" searchData={homeProfileSetupData.skills} onClick={this.addSkill}/>
						<div className="tags-wrapper">
						{	
						this.state.skills.map((skill, index) =>
						<Tag key={index} label={skill.id} click={() => this.removeSkill(index)} />
						)
						}
						</div>
					</section>}

				</Scroller>

				{<ul className="home-profile-setup__nav">
					<div className="home-profile-setup__nav-line">
						<div className="home-profile-setup__nav-line-inner"></div>
						<div className="home-profile-setup__nav-line-inner home-profile-setup__nav-line-main" style={lineAnimation}></div>
						<div className="home-profile-setup__nav-line-inner"></div>
					</div>
					{
						scroll.children.filter((child) => child.name != 'Welcome').map((child, index) =>
							<li key={index}>
								<ScrollLink
									key={index}
									className={classNames({ 'completed': this.state.completed[child.name], 'active': child.active })}
									to={child.start}
									>	
									<i className="iconcss icon-checkmark"></i>
									<span>{child.name}</span>
								</ScrollLink>
							</li>
						)
					}
				</ul>}
			</div>
		)
	}
}	

 
ReactDOM.render(
  <HomeProfileSetup/>,
  document.getElementById('root')
);
`;

		const templateValue = '<div id="root"></div>'

		const stylesheetValue = ''

		return (
			<GenericSandbox scriptValue={scriptValue} templateValue={templateValue} stylesheetValue={stylesheetValue} dependencies={dependencies}/>
		);
	}
}