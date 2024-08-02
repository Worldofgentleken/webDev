function Ex02UserInfo(props){
    return(
        <div>
            {props.header}
            <h3>{`사용자 이름은 ${props.name}입니다.`}</h3>
            <h3>{`나이는 ${props.age}입니다.`}</h3>
            [{props.footer}]
        </div>
    )
}

export default Ex02UserInfo;