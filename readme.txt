// 
//  	YASnippet Hidemarized
//  	version 1.0  (2010/12/12)
//  	by mobitan  http://mobitan.org/
// 

�b��h�L�������g (2010/12/12)

������͉�?
YASnippet ���G�ۂɈڐA���Ă݂��B�{�� v0.61 �̃T�u�Z�b�g�I�Ȃ��́B
�{�� Emacs �ł͂����� �� http://code.google.com/p/yasnippet/

�������
�G�ۃG�f�B�^ v8.00 �ȍ~
Windows Script Host v5.6 �ȍ~ (Windows XP �ȍ~�ɕW������)

���C���X�g�[��
1. �A�[�J�C�u���}�N���t�H���_�ɉ𓀂���B
2. yas.mac ���}�N���o�^����B
3. �X�j�y�b�g�� snippets �t�H���_�ɓ����B�Ƃ肠�����{�Ƃ̂��ۂ��ƒ��ՃQ�t���Q�t��
4. �C���X�g�[����̃t�H���_�\�������̂Ƃ���ɂȂ��Ă��邱�ƁB

	�}�N���t�H���_
	��  yas.mac
	����Yas
	    ��  readme.txt
	    ��  license.txt
	    ��  yashide.mac
	    ��  yashide.wsf
	    ����lib
	    ��    (��)
	    ����snippets
	        ����text-mode
	            ��  email
	            ��  time
	            ����cc-mode
	            ��  ��  do
	            ��  ��  for
	            ��  ��  if
	            ��  ��  (�ȉ���)
	            ��  ����c++-mode
	            ��  ����(�ȉ���)
	            ����css-mode
	            ����(�ȉ���)

���A���C���X�g�[��
1. �}�N���o�^����������B
2. yas.mac �� Yas �t�H���_���폜����B

���g����
0. �{�Ƃ̃h�L�������g����ʂ�ǂ�ŗ�������B(�K�{)
1. �}�N�����N������B
2. ���������ꂽ�瓚����B
3. �X�j�y�b�g���W�J���ꂽ��v���[�X�z���_���̕������ҏW����B
5. �v���[�X�z���_�O�� $0 �ŕҏW����ƏI���B

����������
�Â����X�j�y�b�g�͉��߂ł��Ȃ��B
	$(�`) �͖��������B
	`�`` �� `yas/selected-text` �̂ݑΉ��B����ȊO�͖��������B
�v���[�X�z���_�ҏW���͎��̑��삵���ł��Ȃ��B
	�����L�[: �������� (IME �o�R�͕s��)
	Backspace �L�[: �o�b�N�X�y�[�X
	Enter �L�[: ���s
	Tab �L�[: �v���[�X�z���_�ړ�
	�J�[�\���L�[: �J�[�\���ړ�
	Shift+�J�[�\���L�[: �͈͑I��
	Ctrl+X �L�[: �؂���
	Ctrl+C �L�[: �R�s�[
	Ctrl+V �L�[: �\��t��
	Esc �L�[: �I��
�F�͕K�������v���[�X�z���_�͈̔͂ƈ�v���Ȃ��B

�������I�Șb
�u���ݓ��͒��̃v���[�X�z���_�ԍ��v�Ƃ������͎����ĂȂ��āA�J�[�\���ʒu���炻�̂ǎZ�o����B
�v���[�X�z���_�͏d�Ȃ荇���ꍇ������B�F�͔ԍ��̎Ⴂ���ɓh��d�˂���B�܂� ${1:AA${2:BB}AA} �Ȃ�uBB�v�� $2 �̐F�ɂȂ邪�A${2:BB${1:AA}BB} ���ƁuAA�v�� $1 �̐F�ɂȂ炸�A�S�̂� $2 �̐F�ɂȂ�B
�v���[�X�z���_�����m���אڂ��Ă���ꍇ�A���̋��ڂɓ��͂��ꂽ�����͗����̃v���[�X�z���_�Ɋ܂܂��B�Ⴆ�� ${1:AAA}${2:BBB} ���uAAABBB�v�ɓW�J����� �� Tab �L�[�������āuBBB�v��I�� �� �uXXX�v����͂����ꍇ�A���ʂƂ��� $1 �́uAAAXXX�v�ɁA$2 �́uXXX�v�ɂȂ�A$1 �̒��� $2 ���܂܂��`�ɂȂ�B
�~���[ M ���ʂ̃v���[�X�z���_ P �Ɋ܂܂�Ă���ꍇ�AM ������������Ă� P �ɂ͔��f����Ȃ��B�ӂ��̃v���[�X�z���_���݂��ɑ���̃~���[���܂�ł��Ă����킹���̂悤�ɂ͂Ȃ�Ȃ��B
�͈͑I�����A�ҏW��Ƀv���[�X�z���_�����ł��邩���Ȃ����́A�ҏW�O�̑I��͈� [] �ƃv���[�X�z���_ __ �̈ʒu�֌W�ɂ���Č��܂�B
	[ ]________     :���ł��Ȃ�
	   ________[ ]  :���ł��Ȃ�
	   __[__]__     :���ł��Ȃ�
	   __[_____]    :���ł��Ȃ�
	  [_____]__     :���ł��Ȃ�
	  [________]    :���ł��Ȃ�
	[  ________  ]  :���ł���
	[  ________]    :���ł���
	[  _____]__     :���ł���
	  [________  ]  :���ł���
	   __[_____  ]  :���ł���

���J�X�^�}�C�Y
�v���[�X�z���_�̐F�͕ύX�\�Blib\placeholder.mac �̖`���������Q�ƁB
���͂��܂�J�X�^�}�C�Y�ł��Ȃ��B

���ӎ�
���L�̃I�[�v���\�[�X�\�t�g�E�F�A�𗘗p�����Ă��������܂����B���肪�Ƃ��������܂��B
�EGin
�@http://nanto.asablo.jp/blog/2007/09/12/1793275
�EJSON2.js
�@http://www.json.org/js.html

�������A�{�Ƃɂ��ő�̎ӈӂ��B
�Eyasnippet
�@http://code.google.com/p/yasnippet/

�����C�Z���X
MIT ���C�Z���X
http://www.opensource.org/licenses/mit-license.php

��������l
mobitan
http://mobitan.org/
http://twitter.com/mobitant

���A����
�G�ۂ��ۂ��k�b��
http://forum.mobitan.org/hm/

//  		(C) mobitan 2010
