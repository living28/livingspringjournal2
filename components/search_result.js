export default function SearchResault([result]){
    return<>
    {result.map(val => (
        <div>
            <span>
                {val.title}
            </span>
            <br/>
            <span>
                {val.author}
            </span>
        </div>
        ))
    }
    </>
}