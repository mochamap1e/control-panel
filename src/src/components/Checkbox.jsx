export default function Checkbox({ label, checked, onChange }) {
    return (
        <div className="input">
            <label>{label}</label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>  
    )
}