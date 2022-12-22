import React from 'react'

export default function BesondererSchutz() {
    
    const handleNein = () => {
        setWritten(false);
        props.parentCallback(false);
        // props.parentCallback(written);
        // this.props.parentCallback("Data from child");
      };
    
      const handleJa = () => {
        setWritten(true);
        props.parentCallback(true);
      };
  return (
    <div>
    <div className="userTxt">
      Besonderer Kündigungsschutz?

    </div>
    <br></br>
    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Keiner" onChange={handleNein} />
  <FormControlLabel control={<Checkbox />} label="Betriebsratsmitglied" onChange={handleJa} />
  <FormControlLabel control={<Checkbox />} label="Mutter oder Vater in Elternzeit" onChange={handleJa}/>
  <FormControlLabel control={<Checkbox />} label="Mütter bis 4 Monate nach Entbindung" onChange={handleJa}/>
  <FormControlLabel control={<Checkbox />} label="Schwangerschaft" onChange={handleJa}/>
  <FormControlLabel control={<Checkbox />} label="Schwerbehindert" onChange={handleJa}/>
</FormGroup>
  </div>
  )
}
