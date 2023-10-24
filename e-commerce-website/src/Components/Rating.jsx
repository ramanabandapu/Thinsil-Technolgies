import './Rating.css'

const Rating=(props)=>{
    const goldStar=[]
    let defaultStar=['default','default','default','default','default']
    const ratings = props.stars

    for(let i=1;i<=ratings;i++){
        goldStar.push('gold')
    }

    defaultStar = defaultStar.slice(0,defaultStar.length-goldStar.length)


    return<>
    {goldStar.map(()=><i class="fas fa-star gold"></i>)}
    {defaultStar.map(()=><i class="fas fa-star default"></i>)}
    </>
}

export default Rating