import {
  HttpPostClient,
  HttpPostParams
} from 'data/usecases/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
