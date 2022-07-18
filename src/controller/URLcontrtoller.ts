import { Request, Response } from "express";
import shortid from "shortid";
import {config} from '../config/Constants' 

export class URLcontroller{

    public async shorten(req: Request, res: Response): Promise<void>{
        //hash para url
        const {originURL} = req.body
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
    
//Retorno da URL salva
        res.json({originURL, hash, shortURL})
    }

    public async redirect(req:Request, res: Response): Promise<void>{
        //Pegando hash
        const{hash}=req.params
          
        //Encontrar URL original
        const url={
            originURL: "",
            hash:"",
            shortURL:"",
        }
        //Redirecionando para a URL original
        res.redirect(url.originURL)
    }   
}