import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) =>{
    try {
        const {authorization} = req.headers
        const [type, token] = authorization.split(' ')

        if (!authorization){
            res.status(401).json({'erro': 'nenhum token foi passado'})
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({'erro': 'Token Invalido'})
            }

            req.userId = decoded.id
            return next()
        })
    } catch (error) {   
        res.status(500).json({'erro': 'algo deu errado'})
    }
}