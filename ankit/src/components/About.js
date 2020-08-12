import React, { Component } from 'react'
import { Collapse, Typography } from 'antd';

const { Text } = Typography;
const { Panel } = Collapse;

const overview=<div>
	<p><Text code>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Text><br></br></p>
	<p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.&nbsp; Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.<br></br></p>
	<p>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.&nbsp; </p>
	<p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
	<p>At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.<br></br></p>
	<p><Text code>Stay informed:</Text><br></br></p>
	<ul>
		<li><strong><a href="/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Protect yourself: advice for the public</a> </strong><br></br></li>
		<li><strong><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Myth busters</a></strong><br></br></li>
		<li><strong><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Questions and answers</a></strong><br></br></li>
		<li><strong><a href="/emergencies/diseases/novel-coronavirus-2019/situation-reports">Situation reports</a></strong><br></br></li>
		<li><strong><a href="/emergencies/diseases/novel-coronavirus-2019"><strong>All information on the COVID-19 outbreak</strong></a></strong><br></br></li>
	</ul>
	<br></br><p>&nbsp;</p>
</div>
const prevantion = <div>
	<p><Text code>To prevent infection and to slow transmission of COVID-19, do the following:</Text></p>
	<ul>
		<li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
		<li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
		<li>Avoid touching your face.</li>
		<li>Cover your mouth and nose when coughing or sneezing.</li>
		<li>Stay home if you feel unwell.</li>
		<li>Refrain from smoking and other activities that weaken the lungs.</li>
		<li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
	</ul>
</div>
const symptoms = <div>
	<p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.<br></br></p>
	<p><Text code>Most common symptoms:</Text><br></br></p>
	<ul>
		<li>fever.</li> 
		<li>dry cough.</li>
		<li>tiredness.</li>
	</ul>
	<p><Text code>Less common symptoms:</Text><br></br></p>
	<ul>
		<li>aches and pains.</li>
		<li>sore throat.</li>
		<li>diarrhoea.</li>
		<li>conjunctivitis.</li>
		<li>headache.</li>
		<li>loss of taste or smell.</li>
		<li>a rash on skin, or discolouration of fingers or toes.</li>
	</ul>
	<p><Text code>Serious symptoms:</Text></p>
	<ul>
		<li>difficulty breathing or shortness of breath.</li>
		<li>chest pain or pressure.</li>
		<li>loss of speech or movement.</li>
	</ul>
	<p>Seek immediate medical attention if you have serious symptoms.&nbsp; Always call before visiting your doctor or health facility.&nbsp;</p>
	<p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.&nbsp;</p>
	<p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.&nbsp;</p>
	<p>&nbsp;</p>
</div>

export default class About extends Component {
	
	render() {
		function callback(key) {
			console.log(key);
		  }
		return (
			<div>
				<img src="https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1024v.png?Culture=en&sfvrsn=6e0c1bc7_6%201024w" 
					alt="STAY HOME!!!!! STAY SAFE!!!!!" 
					style={{width:'100%',height:'400px'}}
				/>

				<h1>Coronavirus</h1>
				<Collapse defaultActiveKey={['1']} onChange={callback}>
					<Panel header="Overview" key="1">
						<p>
							{overview}
						</p>
					</Panel>
					<Panel header="Prevention" key="2">
						<p>
							{prevantion}
						</p>
					</Panel>
					<Panel header="Symptoms" key="3" >
					<p>
							{symptoms}
					</p>
					</Panel>
				</Collapse>
			</div>
		)
	}
}
