import { PersonProps } from "./Person";

type PersonListProps = {
    people: PersonProps[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.people.map((person) => {
                return (
                    <h2 key={person.name.first}>
                        {person.name.first} {person.name.last}
                    </h2>
                )
            })}
        </div>
    )
}