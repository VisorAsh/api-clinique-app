import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/usersModel.model.mjs"; // adapte le chemin si besoin

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier que les champs sont présents
    if (!email || !password) {
      return res.status(400).json({ message: "Email et mot de passe requis" });
    }

    // Chercher l'utilisateur
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.specialite },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // expire dans 24h
    );

    // Retourner le token et les infos utiles
    res.status(200).json({
      token,
      user: {
        id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        specialite: user.specialite,
        adresse: user.adresse,
        tel: user.tel,
        dateEmbauche: user.dateEmbauche,
        autorisation: user.autorisation
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
