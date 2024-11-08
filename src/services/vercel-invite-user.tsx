import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from '@react-email/components';

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
  destination?: string;
  date?: string;
  reason?: string;
  from?: string;
  classType?: string;
  passengers?: number;
}

export const VercelInviteUserEmail = ({
  destination = 'td442@cornell.edu',
  date = '2024-01-01',
  reason = 'I want to join the team',
  from = 'Chicago',
  classType = 'First',
  passengers = 3,
}: VercelInviteUserEmailProps) => {
  const previewText = `Thre was a new booking!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Someone wants to travel!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              From: {from},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Destination: {destination},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Date: {date},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Class: {classType},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Passengers: {passengers},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Reason: {reason},
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
