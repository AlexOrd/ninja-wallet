import useragent from 'express-useragent'

export const deviceDetector = (req, res, next) => {
    useragent.express()(req, res, next)
}