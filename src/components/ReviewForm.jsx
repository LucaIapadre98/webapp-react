export default function ReviewsForm ({ 
    formData, 
    setFormData,
    handleFormSubmit,
}){
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="my-5">
            <div className="conatiner my-2">
                <h2>La tua recensione</h2>
                <form className="row" onSubmit={handleFormSubmit}>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input 
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        required />
                    </div>
                    <div className="col-3">
                        <label htmlFor="vote" className="form-label">Voto</label>
                        <input 
                        value={formData.vote}
                        onChange={handleInputChange}
                        type="number" 
                        className="form-control" 
                        id="vote" 
                        name="vote"
                        min="1"
                        max="10" 
                        step="1"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="text" className="form-label">Recensione</label>
                        <textarea
                        name="text"
                        id="text"
                        className="form-control"
                        onChange={handleInputChange}
                        rows="4"
                        required
                        >{formData.text}
                        </textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success">Invio recensione</button>
                    </div>
                </form>
            </div>
        </section>
    )
}