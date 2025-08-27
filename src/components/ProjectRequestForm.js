import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ProjectRequestForm.module.scss";

export default function ProjectRequestForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const SERVICE_ID = "service_d7lx3im";     // Service ID
  const TEMPLATE_ID = "template_5sehk0c";   // Template ID
  const PUBLIC_KEY  = "ZFOrbjiYrl-PyDaPA";  // Public Key

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus({ sending: true, ok: null, msg: "" });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ sending: false, ok: true, msg: "Merci ! Je te recontacte vite." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ sending: false, ok: false, msg: "Erreur, réessaie plus tard." });
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className={styles.formContainer}>
      <h3></h3>

      <label>Nom *</label>
      <input type="text" name="user_name" required />

      <label>Email *</label>
      <input type="email" name="user_email" required />

      <label>Entreprise</label>
      <input type="text" name="company" />

      <label>Type de projet *</label>
      <select name="project_type" required>
        <option>Site vitrine</option>
        <option>E-commerce</option>
        <option>Portfolio</option>
        <option>Refonte</option>
        <option>Autre</option>
      </select>

      <label>Budget estimé *</label>
      <select name="budget" required>
        <option>Moins de 500 €</option>
        <option>Moins de 1000 €</option>
        <option>1000–3000 €</option>
        <option>3000–6000 €</option>
        <option>6000–10 000 €</option>
        <option>10 000 € +</option>
      </select>

      <label>Délai souhaité *</label>
      <select name="timeline" required>
        <option>Urgent (&lt; 2 semaines)</option>
        <option>1–2 mois</option>
        <option>3–4 mois</option>
        <option>Flexible</option>
      </select>

      <label>Fonctionnalités clés</label>
      <textarea name="features" rows="3" placeholder="Blog, espace membre, paiement…" />

      <label>Message *</label>
      <textarea name="message" rows="5" required />

      <label>Fichier (PDF/Images)</label>
      <input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg,.webp" />

      <button type="submit" disabled={status.sending}>
        {status.sending ? "Envoi…" : "Envoyer la demande"}
      </button>

      {status.ok === true && <p style={{ color: "green" }}>{status.msg}</p>}
      {status.ok === false && <p style={{ color: "red" }}>{status.msg}</p>}
    </form>
  );
}
