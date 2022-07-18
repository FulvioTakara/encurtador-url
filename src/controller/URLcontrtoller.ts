import { Request, Response } from "express";
import shortid from "shortid";
import {config} from '../config/constants' 

export class URLcontroller{
//hash para url
    public async shorten(req: Request, res: Response): Promise<void>{
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
    }
}