import React from 'react'
import { Row, Col, Divider, Collapse, } from 'antd'
import { blog1, question1, answer1, question2, answer2, question3, answer3, question4, answer4 } from './Text'
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

export default function Blog() {
    return (
        <div>
            <Row>
                <Col span={15}>
                    <img src="https://www.nfid.org/wp-content/uploads/2020/06/Stop-the-Spread-Symptoms-COVID-767x512-2.png"
                        alt="STAY HOME!!!!! STAY SAFE!!!!!" 
                    >
                    </img>
                </Col>
                <Col span={9}>
                    <p><h2>{blog1}</h2></p>
                    <p><br></br><h2>{blog1}</h2></p><br></br>
                </Col>
            </Row>
            <Divider plain><h1>Questions & Answer</h1></Divider>
            <Row>
                <Col span={24}>
                    <h1 align="center">Frequently Asked Questions About Novel Coronavirus (COVID-19)</h1>
                </Col>
            </Row>
            <Divider plain><h1>About Symptoms</h1></Divider>
            <Collapse  onChange={callback}>
					<Panel header={question1} key="1">
						<p>
							{answer1}
						</p>
					</Panel>
					<Panel header={question2} key="2">
						<p>
							{answer2}
						</p>
					</Panel>
					<Panel header={question3} key="3" >
					<p>
							{answer3}
					</p>
					</Panel>
                    <Panel header={question4} key="4" >
					<p>
							{answer4}
					</p>
					</Panel>
			</Collapse>
        </div>
    )
}
    