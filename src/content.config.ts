// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const mestres = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    atuacao: z.string(),
    cidade: z.string(),
    foto: z.string().optional(),
  }),
});

const publicacoes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    ano: z.string(),
    tipo: z.string(),
    capa: z.string().optional(),
  }),
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dia: z.string(),
    mes: z.string(),
    ano: z.string(),
    local: z.string(),
    descricao: z.string(),
    imagem: z.string().optional(),
    destaque: z.boolean().default(false).optional(),
    passado: z.boolean().default(false).optional(),
  }),
});

export const collections = {
  'mestres': mestres,
  'publicacoes': publicacoes,
  'eventos': eventos,
};