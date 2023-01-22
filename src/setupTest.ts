import '@testing-library/jest-dom'
import { server } from './mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())
