export default function Contact() {
    return(
        <>
        <h2 className="contact-form">Have any questions, concerns, or comments?</h2>
        <h1>Contact Us!</h1>
        <form>
            <label>Name:</label>
                <input type="text" className="form-control" /><br></br>
            <label>Email:</label>
                <input type="text" className="form-control" /><br></br>
            <label>Subject:</label>
                <input type="text" className="form-control" /><br></br>
                <label>Your message:</label> 
                <br></br>   
                <textarea className="form-control" rows="8" id="message" required />
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
        </form>

        </>
    )
}