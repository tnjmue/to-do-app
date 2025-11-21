import image404 from "../assets/confused-sheet.gif"

export default function NotFound() {

    return (
        <div 
        className="NotFound"
        style={{
        backgroundImage: `url(${image404})`,
      }}
        >
            <h1>PAGE NOT FOUND </h1>
        </div>
    )
}