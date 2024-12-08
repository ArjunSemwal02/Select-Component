import styles from "./select.module.css"

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    value?: SelectOption
    onChange: ( value: SelectOption | undefined ) => void
    options: SelectOption[]
}

export function Select({ value, onChange, options}: SelectProps) {
    return <div className={styles.container}>
            <span className={styles.value}>Value</span>
            <div className={styles["clear-btn"]}>&times;</div>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <div className={styles.options}></div>
            <ul>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>{option.label}</li>
                ))}
            </ul>
        </div>
}