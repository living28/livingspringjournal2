export default function Volume1(props){
    return<>
    {props.res.map(val =>{
    <div><span>
        {val.title}
    </span>
    <br/>
    <span>
        {val.author}
    </span>
    </div>})
    
}

    </>
}