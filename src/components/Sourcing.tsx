import styles from '../styles/Home.module.css'
const Sourcing = () => {
    const active = {
        fontSize:'1.8rem'
    }
    const fin = {
        display:'flex',       
        justifyContent: 'space-between'
    }
    const health = {
        display:'flex',
        justifyContent: 'space-evenly',        
    }
    const para = {
        fontSize:'1.2rem'
    }
    const data = {
      marginLeft:'15rem'
    }
    return (
        <div className={styles.source_main}>
            <div className={styles.source_div}>
                <p style={active}>ACTIVELY SOURCING</p>
                <p style={para}>From groundbreaking technology to products useful to the Web3 and Blockchain community now, we source the best projects building across focal areas advancing the United Nations Sustainable goals. </p>
                  <p style={para}>  We welcome dApp builders with innovative projects to join us in creating solutions that will drive economic growth.</p>
                   <p style={para}>Zenith Chain is dedicated to onboarding and supporting developers and partners to scale their projects. Some examples of focal industries include:</p> 
               
            </div>
            <div className={styles.source_mini}>
                <p style={data}>Data Architecture for Private and Government Enterprises</p>
                <div style={fin}>
                    <p>Fintech and Decentralized Applications</p>
                    <p>Blockchain-Based IoT Solutions</p>
                </div>
                <div style={health}>
                    <p>Healthcare</p>
                    <p>Mining</p>
                    <p>Agriculture</p>
                </div>
            </div>
           
            
        </div>
    )
}
export default Sourcing 