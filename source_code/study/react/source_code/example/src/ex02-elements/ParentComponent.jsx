import ChildComponent from "./ChildComponent";

function ParentComponent() {
    return (
        <div>
            <h1>이것은 부모 컴포넌트 입니다.</h1>
            <ChildComponent />
        </div>
    )
}
export default ParentComponent;