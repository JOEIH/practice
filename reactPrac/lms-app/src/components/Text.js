import './Text.css'

const Text = ({children, block, paragraph, size, strong, underline, delete: del, color, mark, code, ...props}) => {
    //block이 true이면 div 태그 이용, paragraph가 true이면 p 태그
    //둘 다 아니면 span 태그 이용
    const Tag = block ? 'div' : paragraph ? 'p' : 'span';
    const fontStyle = {
        fontWeight: strong ? 'bold' : undefined,
        fontSize: typeof size === 'number' ? size : undefined,
        textDecoration: underline ? 'underline' : undefined,
        color: color,

    }

    if (mark) {
        children = <mark>{children}</mark>
    }

    if (code) {
        children = <code>{children}</code>
    }

    if (del) {
        children = <del>{children}</del>
    }

    return (
        <Tag className={typeof size === 'string' ? `Text--size-${size}` : undefined} style={{...props.style, ...fontStyle}} {...props}>
            {children}
            Text
        </Tag>
    );
};

export default Text;