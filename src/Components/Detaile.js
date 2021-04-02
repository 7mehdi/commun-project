import { useState, useEffect } from 'react';
import axios from 'axios';
import './Detaile.css';
const Detaile = () => {
	const [data, setdata] = useState();
	const [theme, setTheme] = useState('white');

	const getData = async (name) => {
		const { data } = await axios
			.get(` https://restcountries.eu/rest/v2/name/${name}`)
			.catch((err) => console.log('Error', err));
		console.log(data);
		setdata(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={theme}>
			<div className="navbar  ">
				<button onClick={() => setTheme(theme === 'white' ? 'dark' : 'white')}>
					<i className="far fa-moon"> </i>
				</button>
				<h1> Where Are U ??</h1>
			</div>
			<body>
				<div style={{ paddingLeft: '10px', marginBottom: '50px ' }} className="btn">
					<button>
						<i style={{ paddingRight: '15px' }} className="fas fa-arrow-left"></i>Back
					</button>
				</div>
				<div className="container  ">
					<div className="Flag">
						{data && <img src={`${data[0].flag}`} alt="kk" width="500px" height="450" />}
					</div>

					{data && (
						<div className="information ">
							<div className="left_info">
								<h3> {`${data[0].name}`} </h3>
								<ul>
									<li>
										<h6> nativeName: {`${data[0].nativeName}`} </h6>
									</li>
									<li>
										<h6> population: {`${data[0].population}`} </h6>
									</li>
									<li>
										<h6> Region : {`${data[0].region}`} </h6>
									</li>
									<li>
										<h6> SubRegion : {`${data[0].name}`} </h6>
									</li>
									<li>
										<h6> capital : {`${data[0].capital}`} </h6>
									</li>
								</ul>
							</div>
							<div className="Right_info">
								<ul>
									<li>
										<h6> Top level Domain : {`${data[0].topLevelDomain[0]}`} </h6>
									</li>
									<li>
										<h6> Currecies : {`${data[0].currencies[0].name}`} </h6>
									</li>
									<li>
										<h6> Languages : {`${data[0].languages[0].name}`} </h6>
									</li>
								</ul>
							</div>
							<div className="border ">
								<li>
									<h6>
										border countries :
										{data[0].borders.map((elem) => {
											return <span> {`${elem}   `}</span>;
										})}
									</h6>
								</li>
							</div>
						</div>
					)}
				</div>
			</body>
		</div>
	);
};

export default Detaile;
