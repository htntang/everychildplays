export default function Contact() {
    return(
        <>
        <h2 className="contact-form">Have any questions, concerns, or comments?</h2>
        <h1>Contact Us!</h1>
        <form>
            <label>Name:</label>
                <input type="text" name="name" />
            <label>Email:</label>
                <input type="text" name="email" />
            <label>Subject:</label>
                <input type="text" name="subject" />
                <label>Questions, concerns, or comments?</label> 
                <br></br>   
                <textarea className="form-control" id="message" required />
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
        </form>

        </>
    )
}