import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import book from '../Images/book.png';
export default function Education(){
    return(
        <div className="">
            <div className="p-5" id="#id_education">
              <p className="text-center text-4xl font-bold my-10">Education</p>

              <VerticalTimeline lineColor="#fff">
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#e0e0e0', color: 'rgb(268,69,69)' }}
                  contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                  date="2020 - 2024 (Expected)"
                  iconStyle={{ background: '#000', color: '#fff' }}
                  icon={<book/>}
                >
                  <h3 className="vertical-timeline-element-title md:text-2xl text-xl text-black">B.Tech in Computer Science, Software Engineering</h3>
                  <p className="vertical-timeline-element-subtitle md:text-xl text-lg text-black">Jain University, Bangalore</p>
                      
                  </VerticalTimelineElement>
              
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#e0e0e0', color: 'rgb(268,69,69)' }}
                  contentArrowStyle={{ borderRight: '7px solid  #e0e0e0' }}
                  date="2018 - 2020"
                  iconStyle={{ background: '#000', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title md:text-2xl text-xl text-black">Pre-University Course</h3>
                  <p className="vertical-timeline-element-subtitle md:text-xl text-lg text-black">Sri Chaitanya PU College, Bangalore</p>
                      
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#e0e0e0', color: 'rgb(268,69,69)'}}
                  contentArrowStyle={{ borderRight: '7px solid  #e0e0e0' }}
                  date="2017 - 2018"
                  iconStyle={{ background: '#000', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title md:text-2xl text-xl text-black">Secondary School Certificate</h3>
                  <p className="vertical-timeline-element-subtitle md:text-xl text-lg text-black">Narayana EM High School</p>
                      
                  </VerticalTimelineElement>

                  </VerticalTimeline>
            </div>

        </div>
    );
}