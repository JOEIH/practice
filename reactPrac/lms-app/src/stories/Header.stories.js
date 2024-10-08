import Header from "../components/Header"

export default {
    title: "Components/Header",
    component: Header,
    argTypes: {
        level: {control: {type: "range", min: 1, max: 10}},
        color: {control: 'color'},
        strong: {control: 'boolean'},
        underline: {control: 'boolean'}
    }
}

export const Default = (args) => {
    return <Header {...args}>Header</Header>
}