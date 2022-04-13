

function Card({data}){

  let ms = Date.parse(new Date(data.updated_at));
  
  let currDate = Date.parse(new Date());
  // console.log("curr Date ",currDate)
  //console.log("updated at ",ms)

  let difference = currDate - ms;
  //console.log("differnce", difference);

  let seconds =  Number.parseInt(difference/(1000));
  let minutes =  Number.parseInt(difference/(1000*60));
  let hours =  Number.parseInt(difference/(1000*60*60));
  let days = Number.parseInt(difference/(60*60*24*1000));
  let day = new Date(data.updated_at);
  let repodate = day.getDate();

  const months = ["Jan","Feb", "Mar","Apr", "May","June","July","Aug", "Sep", "Oct", "Nov", "Dec"]
  let month = months[day.getMonth()] ;

  // console.log("date, month",month, repodate)
  // console.log(data.name)
  // console.log("seconds",seconds);
  // console.log("minutes",minutes);
  // console.log("hours", hours);
  // console.log("days", days);
  console.log("day",day)

  return(
    <>
    <hr></hr>
    
      <div>
        <div>
              <h3 style={{color:"Blue"}} >{data.name}</h3>
        </div>
        <div>
          <p style={{color : "#57606a", fontSize:"14px"}} > {data.description} </p>
        </div> 
        <div>
           <span style={{margin : "10px 20px 10px 0px"}} > language: {data.language} </span>
           <span style={{margin : "10px 20px 10px 0px"}} > Forks:{data.forks_count} </span>
           <span> Updated {seconds < 60 ? `${seconds} sec ago` : minutes < 60 ? `${minutes} min ago` : hours < 60 ? `${hours} hours ago` : days < 30 ? `${days} days ago` : ` ${month} ${repodate}` } </span>
        </div>
      </div>
    </> 
  )
}
export default Card