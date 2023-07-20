import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import book from '../Images/book.png';
export default function Education(){
    return(
        <container className="" id="#id_education">
            <div className="p-5">
              <p className="text-center text-4xl font-bold">Education</p>

              <VerticalTimeline lineColor="#000">
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#000', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #000' }}
                  date="2020 - 2024 (Expected)"
                  iconStyle={{ background: '#5d5d5d', color: '#fff' }}
                  icon={<book/>}
                >
                  <h3 className="vertical-timeline-element-title text-2xl">B.Tech in Computer Science, Software Engineering</h3>
                  <p className="vertical-timeline-element-subtitle">Jain University</p>
                      
                  </VerticalTimelineElement>
              
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#000', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #000' }}
                  date="2018 - 2020"
                  iconStyle={{ background: '#5d5d5d', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title text-2xl">Pre-University Course</h3>
                  <p className="vertical-timeline-element-subtitle">Sri Chaitanya PU College</p>
                      
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                  className="vertical-timeline-element--college"
                  contentStyle={{ background: '#000', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #000' }}
                  date="2017 - 2018"
                  iconStyle={{ background: '#5d5d5d', color: '#fff' }}
                >
                  <h3 className="vertical-timeline-element-title text-2xl">Secondary School Certificate</h3>
                  <p className="vertical-timeline-element-subtitle">Narayana EM High School</p>
                      
                  </VerticalTimelineElement>

                  </VerticalTimeline>
            </div>

        </container>
    );
}