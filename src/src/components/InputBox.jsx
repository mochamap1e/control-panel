export default function InputBox({ label, type, value, setter }) {
    return (
        <div className="input">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => {setter(e.target.value)}}
            />
        </div>  
    )
}