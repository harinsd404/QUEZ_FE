import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { authenticateWithBSM } from '@/api/auth';
import * as _ from './style';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      setError('인증 코드가 없습니다.');
      return;
    }

    const handleAuth = async () => {
      try {
        const response = await authenticateWithBSM(code);
        login(response.token, response.user);
        navigate('/');
      } catch (err) {
        setError('로그인에 실패했습니다. 다시 시도해주세요.');
        console.error('Authentication error:', err);
      }
    };

    handleAuth();
  }, [searchParams, login, navigate]);

  const handleRetry = () => {
    navigate('/login');
  };

  if (error) {
    return (
      <_.Container>
        <_.ErrorBox>
          <_.ErrorText>{error}</_.ErrorText>
          <_.RetryButton onClick={handleRetry}>
            다시 로그인하기
          </_.RetryButton>
        </_.ErrorBox>
      </_.Container>
    );
  }

  return (
    <_.Container>
      <_.LoadingBox>
        <_.Spinner />
        <_.LoadingText>로그인 처리중...</_.LoadingText>
      </_.LoadingBox>
    </_.Container>
  );
};

export default OAuthCallback;
