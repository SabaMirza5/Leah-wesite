import React from 'react'
import Mission_and_values_props from '../components/Mission_and_values_props'
import mission1 from "../assets/mission1.png";
import mission2 from "../assets/mission2.png";
import mission3 from "../assets/mission3.png";
import mission4 from "../assets/mission4.png";
import mission5 from "../assets/mission5.png";


function Mission_and_values() {
  return (
    <>
      <Mission_and_values_props
      missionimg={mission1}
      
      missionheading="Transparent"
      missionpera="We are transparent and honest in everything we do. We do not hide information."
      missionimg2={mission2}
      missionheading2="Professional"
      missionpera2="We are professional in our act and appearance. We treat everyone with respect."
      />

<Mission_and_values_props
      missionimg={mission3}
      
      missionheading="Dependable and Predictable"
      missionpera="We are firm and fair in our interactions and strive to avoid surprises. We are responsive to our clients and their stakeholders' impact their future."
      missionimg2={mission4}
      missionheading2="Continued Improvement"
      missionpera2="We strive to understand every problem thoroughly. We don't wing it."
      />
         <Mission_and_values_props
      missionimg={mission5}
      missionheading="Committed"
      missionpera="We are passionate about the industries we service. We are involved."

      />
      
    </>
  )
}

export default Mission_and_values
