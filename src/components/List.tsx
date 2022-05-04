import Sub from "../types.d";

interface Props {
    subs: Array<Sub>
}

const List = ({ subs }: Props) => {
    return (
        <ul>
            {
                subs?.map(sub => {
                    return (
                        <li key={sub.nickname}>
                            <img src={sub.avatar} alt={`Avatar for ${sub.nickname}`} />
                            <h4>
                                {sub.nickname} (<small>{sub.subMonth}</small>)
                            </h4>
                            <p>{sub.description}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List