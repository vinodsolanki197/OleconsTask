const Languageoption = (props) => {
    return (
        <select onChange={props.onChange}>
            <option>Select Language</option>
            <option value={'en'}>English</option>
            <option value={'rus'}>Russian</option>
            <option value={'ko'}>Korean</option>
        </select>
    );
}

export default Languageoption;