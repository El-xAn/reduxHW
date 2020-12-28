export const addedInfo = (name, number) => (
    {
        type: "addInfo",
        payload: {
        number: number,
        name: name }
    }
)