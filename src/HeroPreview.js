const HeroPreview = ({ hero, heros, herosId, setHerosId }) => {
  
  return (
    <>
      <div className="card" style={{width: "10rem", margin:10}}>
        <img className="card-img-top" 
          src={hero.image.url} 
          alt="hero"  
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <br/>        
          <button className="btn btn-primary" 
            onClick = {()=>{
              var badCount=0 
              var goodCount=0
              if(hero.biography.alignment === "bad")
                badCount=1
              if(hero.biography.alignment === "good") 
                goodCount=1
              for (var i = 0; i< heros.length; i++){
                if(heros[i].biography.alignment === "bad")
                  badCount++
                else
                  goodCount++
              }
              const balancedTeam = (badCount<=3 && goodCount<=3)
              if (herosId.length < 6 && herosId.indexOf(hero.id)===-1 && balancedTeam)
                setHerosId([...herosId, hero.id])             
            }}> 
            Agregar 
          </button>   
        </div>
      </div>
    </>
  )
}

export default HeroPreview