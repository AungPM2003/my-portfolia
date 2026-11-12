"use server"

import { ARTICLES_QUERY_RESULT } from "@/sanity.types"
import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLES_QUERY } from "@/sanity/queries/query"


/**
 * Fetch a list of all articles
 * 
 * @returns Primise<ARTICLES_QUERY_RESULT>
 */
export async function getArticles(): Promise<ARTICLES_QUERY_RESULT> {
    const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY })
    return articles
}


/**
 * Fetch a list of all articles
 * 
 * @returns Primise<ARTICLES_QUERY_RESULT>
 */
export async function getArticleByCategory({
    category
}: { category: string }): Promise<ARTICLES_QUERY_RESULT> {
    const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY })
    return articles
}