import image404 from "../assets/dragon-no-bg.gif"

export default function NotFound() {

    return (
        <div 
        className="NotFound"
        style={{
        backgroundImage: `url(${image404})`,
      }}
        >
            <h1>PAGE NOT FOUND </h1>
            {/* <img src={image404} alt="404 Page Not Found" /> */}
        </div>
    )
}