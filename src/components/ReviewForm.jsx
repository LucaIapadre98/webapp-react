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
        <section className="review-form-section">
            <div className="review-section-heading">
                <p className="section-kicker">Condividi il tuo parere</p>
                <h2>La tua recensione</h2>
            </div>
            <div className="review-form-card">
                <form className="review-form" onSubmit={handleFormSubmit}>
                    <div>
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
                    <div>
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
                    <div className="review-field-message">
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
                    <div className="review-submit">
                        <button className="button-accent" type="submit">Invia recensione</button>
                    </div>
                </form>
            </div>
        </section>
    )
}