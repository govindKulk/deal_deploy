'use client'
import styles from './leavereview.module.css'
import {TextField} from '@mui/material'
import { useForm } from 'react-hook-form'

const LeaveReview = () => {

    const { register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        alert('Details registered, we will get to you soon!!!')
    }

    return (
      <div className={styles.leaveReviewContainer}>
          <div className = {styles.leaveReviewLine}></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.leaveReviewFieldContainer}>
              <label>Email</label>
              <TextField
                fullWidth
                margin="dense"
                error = {errors.Email!==undefined}
                helperText = {errors.Email?.message}
                label = 'eg. abc@xyz.com'
                size='small'
                {...register('Email',{required:'Email is required',pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Enter a valid email'}})}
              />
            </div>
            <div className={styles.leaveReviewFieldContainer}>
              <label>Title</label>
              <TextField
                fullWidth
                margin="dense"
                error = {errors.Title!==undefined}
                helperText = {errors.Title?.message}
                label = 'Title'
                size='small'
                {...register('Title',{required:'Title is required'})}
              />
            </div>
            <div className={styles.leaveReviewFieldContainer}>
              <label>Review</label>
              <TextField
                multiline
                fullWidth
                margin="dense"
                error = {errors.Review!==undefined}
                helperText = {errors.Review?.message}
                label = 'Leave a review'
                rows={4}
                {...register('Review',{required:'Review is required'})}
              />
            </div>
            <button>Submit Review</button>
          </form>
      </div>
    )
}

export default LeaveReview