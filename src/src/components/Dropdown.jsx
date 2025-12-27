export default function Dropdown({ label, value, children, onChange }) {
    return (
        <div className="input">
            <label>{label}</label>
            <select
                value={value}
                onChange={onChange}
            >{children}</select>
        </div>
    )
}