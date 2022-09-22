import { Startup } from "../../Types/Startup";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function StartupList() {
  const [startupList, setStartupList] = useState<Startup[]>([]);
  StartupHttpService.getStartups().then((res: Startup[]) => setStartupList(res));
  return (
    <Grid container spacing={2} direction="column" id={"startup-list"}>
      {startupList.map((startup: Startup, index: number) => <Grid item key={index}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
              {startup.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Founded: {startup.dateFounded.getFullYear()} | {startup.employees} Employees | $ {startup.totalFunding} Mio.
              | {startup.currentInvestmentStage}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
              {startup.shortDescription}
            </Typography>
          </CardContent>
        </Card>
      </Grid>)}
    </Grid>
  );
}

