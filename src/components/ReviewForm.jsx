export default function ReviewsForm ({                                               //FUNZIONI IMPORTATE COME PROPS //
    formData, 
    setFormData,
    handleFormSubmit,
}){
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,                                             //CAMBIAMO IL VALORE QUANDO VIENE ESEGUITO //
        });
    };

    return (
        <section className="my-5">
            <div className="container-form my-2">
                <h2>La tua recensione</h2>
                <form className="card-row" onSubmit={handleFormSubmit}>                               
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
                        required
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="text" className="form-label">Recensione</label>
                        <textarea
                        name="text"
                        id="text"
                        value={formData.text}
                        className="form-control"
                        onChange={handleInputChange}
                        required
                        rows="5"
                        >
                        </textarea>
                    </div>
                    <div className="col-2 my-4">
                        <button className="btn btn-primary">Invio recensione</button>
                    </div>
                </form>
            </div>
        </section>
    )
}