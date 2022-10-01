import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImages';
import Header from '../components/Header';

export default function signup() {
  return <Container>
        <BackgroundImage/>
        <Header/>
        <div className='body flex column a-center j-center'>
            <div className='text flex column'>
                <h1> Unlimited movies, TV shows and more</h1>
                <h4>
                    Watch anywhere. Cancel anytime
                </h4>
                <h6>
                    Ready to watch? Enter your email to crate or restart membership
                </h6>
            </div>
            <div className='form'>
                <input type='email' placeholder='Email Address' name='email'/>
                <input type = 'password' placeholder='Password' name='Password'/>
                <button>
                    Get Started
                </button>
            </div>
            <button>
                Log In
            </button>
        </div>
    </Container>
    
}

const Container = styled.div``;