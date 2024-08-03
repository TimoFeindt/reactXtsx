
type UserProps = {
    name: string,
    job: string,
    mail: string
}

export default function UserProfil( { name, job, mail } : UserProps) {
    return(
        <div style={{backgroundColor: 'beige', width: '220px', padding: '10px'}}>
            <h3>UserName: {name}</h3>
            <p>UserJob: {job}</p>
            <p>UserMail: {mail}</p>
        </div>
    )
}