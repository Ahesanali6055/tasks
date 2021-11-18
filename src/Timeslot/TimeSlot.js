import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TimeSlot = () =>
{
  const { register, control, handleSubmit } = useForm();
  const [arr, setArr] = useState([]);

  const submit = (data) =>
  {
    console.log(data);
    let newArr = [];
    let varStart = data.starttime;
    let varEnd = data.endTime;
    let varTime = data.slottime;
    let starttimeMinit = varStart.slice(0, 2) * 60 + +(varStart.slice(3));
    let endtimeMinit = (varEnd.slice(0, 2) * 60) + (+(varEnd.slice(3)));
    let timeInputSecond = endtimeMinit - starttimeMinit;
    let slotTimeMinit = varTime.slice(0, 2) * 60 + +(varTime.slice(3));
    var allTime = Math.ceil(timeInputSecond / slotTimeMinit);
    let slotFloor = Math.floor(slotTimeMinit / 60);
    let slotModulo = slotTimeMinit % 60;
    console.log(slotModulo);
    let start1 = +(varStart.slice(0, 2));
    let start2 = +(varStart.slice(3));
    for (let i = 0; i < allTime; i++)
    {
      const stringSlot1 = `${ start1 }:${ start2 }`;
      if (start2 + slotModulo >= 60)
      {
        start2 = (start2 + slotModulo) - 60;
        start1 = start1 + 1;
      } else
      {
        start2 = start2 + slotModulo;
      }
      start1 = start1 + slotFloor;
      const stringSlot2 = `${ start1 }:${ start2 }`;
      if (start2 === 0)
      {
        newArr.push({ "item": `${ stringSlot1 }0 To ${ stringSlot2 }0`, "index": i });
      } else
      {
        newArr.push({ "item": `${ stringSlot1 } To ${ stringSlot2 }`, "index": i });
      };
    }
    console.log(newArr);
    console.log(arr);
    setArr(newArr);
  };


  // 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

  return (
    <div>
      <form onSubmit={handleSubmit((data) => submit(data))}>
        {/* <Stack component="form" noValidate spacing={3}> */}
        <div>
          <h3 className="title_time">Monday</h3>
          {arr.map((data) => (
            <div className="row grid">
              <div className="col-md-2 bg-white data_grid">
                {data.item}
              </div>
            </div>
          ))}
        </div>
        <Controller
          render={() => (
            <TextField
              {...register("starttime", { required: true })}
              id="time"
              className="ml-5 mt-5"
              label="Start Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
          )}
          control={control}
        ></Controller>
        <Controller
          render={() => (
            <TextField
              {...register("endTime", { required: true })}
              id="time"
              className="ml-5 mt-5"
              label="End Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
          )}
          control={control}
        ></Controller>
        <Controller
          render={() => (
            <TextField
              {...register("slottime", { required: true })}
              className="ml-5 mt-5"
              id="time"
              label="Slot Time"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
          )}
          control={control}
        ></Controller>
        <br />
        <Button
          className="ml-5 mt-4"
          type="submit"
          variant="contained"
          sx={{ width: 150 }}
        >
          Set Time
        </Button><br />
        {/* </Stack> */}
      </form>
      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {arr.map((data) => (
          <Grid item xs={2} sm={4} md={4} key={data.index}>
            <Item>{data.item}</Item>

          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};
export default TimeSlot;
