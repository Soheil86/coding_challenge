import axios from 'axios'
import { Startup, StartupDTO } from '../../Types/Startup'
import StartupMapper from './Startup.mapper'
import StartupList from '../../Components/Startup/StartupList'

export class StartupHttpService {
  public static async getStartupById(id: string | number): Promise<Startup> {
    const response = await axios.get<StartupDTO>(`/api/startups/${id}`)
    return StartupMapper.map(response.data)
    // StartupMapper.map(item => (
    //   // < StartupList response = { response } />
    // ))
    // < StartupList response = { response } />
  }
}
